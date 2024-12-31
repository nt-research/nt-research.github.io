export function NtMonsterPreview({
  vnum,
  label,
  height,
}: {
  vnum: number;
  label?: string;
  height?: number;
}): JSX.Element {
  const alt = label ? label : `Monster ${vnum}`;
  return (
    <img
      src={`https://itempicker.atlagaming.eu/api/monsters/preview/${vnum}`}
      alt={alt}
      height={height}
      style={{
        verticalAlign: "middle",
      }}
    />
  );
}

export function NtMonsterIcon({
  vnum,
  label,
  height,
}: {
  vnum: number;
  label?: string;
  height?: number;
}): JSX.Element {
  const alt = label ? label : `Item ${vnum}`;
  return (
    <img
      src={`https://itempicker.atlagaming.eu/api/monsters/icon/${vnum}`}
      alt={alt}
      height={height}
      style={{
        verticalAlign: "middle",
      }}
    />
  );
}

export function NtItemIcon({
  vnum,
  label,
  height,
}: {
  vnum: number;
  label?: string;
  height?: number;
}): JSX.Element {
  const alt = label ? label : `Item ${vnum}`;
  return (
    <img
      src={`https://itempicker.atlagaming.eu/api/items/icon/${vnum}`}
      alt={alt}
      height={height}
      style={{
        verticalAlign: "middle",
      }}
    />
  );
}
