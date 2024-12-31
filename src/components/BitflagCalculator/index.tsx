import { useState } from "react";
import styles from "./styles.module.css";

const options = [
  { name: "cantWalk" },
  { name: "canCollect" },
  { name: "cantDebuff" },
  { name: "canCatch" },
  { name: "disappearAfterSeconds" },
  { name: "disappearAfterHitting" },
  { name: "hasMode" },
  { name: "disappearAfterSecondsMana" },
  { name: "onDefenseOnlyOnce" },
  { name: "hasDash" },
  { name: "canRegenMp" },
  { name: "cantVoke" },
  { name: "(bitFlags & 4096)" },
  { name: "(bitFlags & 8192)" },
  { name: "(bitFlags & 16384)" },
  { name: "(bitFlags & 32768)" },
  { name: "(bitFlags & 65536)" },
  { name: "(bitFlags & 131072)" },
  { name: "(bitFlags & 262144)" },
  { name: "(bitFlags & 524288)" },
  { name: "(bitFlags & 1048576)" },
  { name: "(bitFlags & 2097152)" },
  { name: "(bitFlags & 4194304)" },
  { name: "(bitFlags & 8388608)" },
  { name: "(bitFlags & 16777216)" },
  { name: "(bitFlags & 33554432)" },
  { name: "(bitFlags & 67108864)" },
  { name: "(bitFlags & 134217728)" },
  { name: "dontDrainHpAfterSeconds" },
  { name: "(bitFlags & 536870912) boss related" },
  { name: "(bitFlags & 1073741824) boss related" },
  { name: "cantTargetInfo" },
];

function Option({
  name,
  index,
  bitFlags,
  setBitFlags,
}: {
  name: string;
  index: number;
  bitFlags: number;
  setBitFlags: (bitFlags: number) => void;
}): JSX.Element {
  const bit = 1 << index;
  const uniqueName = `bitflag-${index}-${bit}`;
  const isChecked = (bitFlags & bit) === bit;

  return (
    <div>
      <input
        type="checkbox"
        id={uniqueName}
        name={uniqueName}
        value={bit}
        checked={isChecked}
        onChange={(e) => {
          const newState = e.target.checked;
          if (newState) {
            setBitFlags(bitFlags | bit);
          } else {
            setBitFlags(bitFlags & ~bit);
          }
        }}
      />
      <label htmlFor={uniqueName}>{name}</label>
    </div>
  );
}

export default function BitflagCalculator(): JSX.Element {
  const [bitFlags, setBitFlags] = useState(0);
  const [bitFlagsInput, setBitFlagsInput] = useState("0");

  return (
    <div className="container alert alert--secondary">
      <div>Options calculator</div>
      <hr />
      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <Option
            key={index}
            name={option.name}
            index={index}
            bitFlags={bitFlags}
            setBitFlags={(newBitFlags) => {
              setBitFlags(newBitFlags);
              setBitFlagsInput(newBitFlags.toString());
            }}
          />
        ))}
      </div>
      <hr />
      <div>
        <span>Bit flags: </span>
        <input
          type="text"
          id="bitFlags-input"
          name="bitFlags-input"
          value={bitFlagsInput}
          onChange={(e) => {
            setBitFlagsInput(e.target.value);
            const isNumber = /^\d+$/.test(e.target.value);

            if (isNumber || e.target.value === "") {
              setBitFlags(0);
              return;
            } else {
              const newBitFlags = parseInt(e.target.value, 10);
              setBitFlags(newBitFlags);
            }
          }}
        />
      </div>
    </div>
  );
}
