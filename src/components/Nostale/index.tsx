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
    />
  );
}
