import React, { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    name: searchParams.get("name") || "",
    genres: searchParams.getAll("genre") || [],
  });

  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.name.trim()) {
      params.set("name", filters.name.trim());
    }

    filters.genres.forEach((genre) => {
      params.append("genre", genre);
    });

    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  const handleChange = (key) => (e) => {
    setFilters((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleGenreChange = (genre) => {
    setFilters((prev) => {
      const isSelected = prev.genres.includes(genre);
      return {
        ...prev,
        genres: isSelected
          ? prev.genres.filter((g) => g !== genre)
          : [...prev.genres, genre],
      };
    });
  };

  const handleResetFilters = () => {
    setFilters({ name: "", genres: [] });
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        dropdownVisible,
        setDropdownVisible,
        handleChange,
        handleGenreChange,
        handleResetFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  return useContext(FiltersContext);
}
