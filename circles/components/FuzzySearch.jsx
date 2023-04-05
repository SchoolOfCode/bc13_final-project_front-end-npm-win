import { ReactSearchAutocomplete } from "react-search-autocomplete";
import React from "react";

export default function FuzzySearchBar({
  onFocus,
  onHover,
  onSearch,
  onSelect,
  onClear,
  formatResult,
  className,
}) {
  const items = [
    { id: 1, name: "Chess" },
    { id: 2, name: "Swimming" },
    { id: 3, name: "Exercise" },
    { id: 4, name: "Health" },
    { id: 5, name: "Climbing" },
    { id: 6, name: "Ping Pong" },
    { id: 7, name: "Volunteer" },
  ];

  let fuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: ["name"],
  };

  return (
    <div
      className={className}
      aria-label="Type the name of a group you want to join"
    >
      <div>
        <ReactSearchAutocomplete
          items={items}
          onSearch={onSearch}
          onHover={onHover}
          onSelect={onSelect}
          onFocus={onFocus}
          onClear={onClear}
          autoFocus
          formatResult={formatResult}
          fuseOptions={fuseOptions}
        />
      </div>
    </div>
  );
}
