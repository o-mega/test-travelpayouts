import { useState, useEffect } from "react";

import { Locale } from './locale';

export function loadData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    await Locale.load();
    const response = await fetch("data.json");
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
}
