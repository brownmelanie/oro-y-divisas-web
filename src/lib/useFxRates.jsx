import { useEffect, useState } from "react";

// 1 llamada base USD, y calculamos cruzado a ARS
const SYMBOLS = ["ARS", "EUR", "BRL", "GBP"];
const XHOST = `https://api.exchangerate.host/latest?base=USD&symbols=${SYMBOLS.join(",")}`;
const ERAPI = `https://open.er-api.com/v6/latest/USD`; // fallback

export function useFxRates() {
  const [state, setState] = useState({
    loading: true,
    ratesUSD: null,   // { ARS, EUR, BRL, GBP } vs USD
    updated: null,
    error: null,
    source: null,
  });

  useEffect(() => {
    const cached = localStorage.getItem("fx_cache_v1");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setState((s) => ({ ...s, ...parsed, loading: false }));
      } catch {}
    }

    const controller = new AbortController();
    (async () => {
      try {
        // 1) exchangerate.host
        const r = await fetch(XHOST, { signal: controller.signal });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const j = await r.json();
        if (!j?.rates?.ARS) throw new Error("No rates");
        const payload = {
          loading: false,
          ratesUSD: j.rates,
          updated: j.date || new Date().toISOString().slice(0, 10),
          error: null,
          source: "exchangerate.host",
        };
        localStorage.setItem("fx_cache_v1", JSON.stringify(payload));
        setState(payload);
      } catch (e1) {
        try {
          // 2) Fallback: open.er-api.com
          const r2 = await fetch(ERAPI, { signal: controller.signal });
          if (!r2.ok) throw new Error(`HTTP ${r2.status}`);
          const j2 = await r2.json();
          const rates = j2?.rates;
          if (!rates?.ARS) throw new Error("No rates");
          const payload = {
            loading: false,
            ratesUSD: { ARS: rates.ARS, EUR: rates.EUR, BRL: rates.BRL, GBP: rates.GBP },
            updated: j2?.time_last_update_utc?.slice(0, 16) || j2?.time_last_update_unix || null,
            error: null,
            source: "open.er-api.com",
          };
          localStorage.setItem("fx_cache_v1", JSON.stringify(payload));
          setState(payload);
        } catch (e2) {
          setState({ loading: false, ratesUSD: null, updated: null, error: e2?.message || "Error", source: null });
        }
      }
    })();

    return () => controller.abort();
  }, []);

  // Derivados: ARS por 1 unidad de cada moneda
  function toARS() {
    if (!state.ratesUSD) return null;
    const { ARS, EUR, BRL, GBP } = state.ratesUSD;
    return {
      USD: ARS,        // 1 USD → ARS
      EUR: ARS / EUR,  // (ARS/USD) / (EUR/USD) = ARS/EUR
      BRL: ARS / BRL,
      GBP: ARS / GBP,
    };
  }

  return { ...state, toARS: toARS() };
}
