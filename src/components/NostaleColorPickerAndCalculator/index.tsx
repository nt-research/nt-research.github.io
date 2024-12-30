import { useCallback, useEffect, useState } from "react";
import { RgbaColorPicker } from "react-colorful";
import {
  colorToARGB,
  colorToInt,
  colorToRGBA,
  convertARGBToColor,
  convertIntToColor,
  convertRGBAToColor,
} from "./color";
import Link from "@docusaurus/Link";

export default function NostaleColorPickerAndCalculator(): JSX.Element {
  const [color, setColor] = useState({ r: 255, g: 65, b: 156, a: 41 / 255 });
  const [colorARGB, setColorARGB] = useState(colorToARGB(color));
  const [colorRGBA, setColorRGBA] = useState(colorToRGBA(color));
  const [colorInt, setColorInt] = useState(colorToInt(color).toString());

  const updateColor = useCallback((colorName: "r" | "g" | "b" | "a") => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const colorCopy = Object.assign({}, color);
      const value = parseInt(e.target.value, 10);
      if (isNaN(value)) {
        return;
      }

      if (colorName === "a") {
        // alpha is also set as 0-255, but we need to convert it to 0-1
        colorCopy[colorName] = value / 255;
      } else {
        colorCopy[colorName] = value;
      }
      setColor(colorCopy);
    };
  }, []);

  useEffect(() => {
    setColorARGB(colorToARGB(color));
    setColorRGBA(colorToRGBA(color));
    setColorInt(colorToInt(color).toString());
  }, [color]);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col col--3">
            <RgbaColorPicker color={color} onChange={setColor} />
          </div>

          <div className="col col--3">
            <p>
              R:{" "}
              <input
                type="number"
                min="0"
                max="255"
                onChange={updateColor("r")}
                value={color.r}
              />
            </p>
            <p>
              G:{" "}
              <input
                type="number"
                min="0"
                max="255"
                onChange={updateColor("g")}
                value={color.g}
              />
            </p>
            <p>
              B:{" "}
              <input
                type="number"
                min="0"
                max="255"
                onChange={updateColor("b")}
                value={color.b}
              />
            </p>
            <p>
              A:{" "}
              <input
                type="number"
                min="0"
                max="255"
                onChange={updateColor("a")}
                value={(color.a * 255).toFixed(0)}
              />
            </p>
          </div>
          <div className="col col--3">
            <p>
              #ARGB:{" "}
              <input
                type="text"
                value={colorARGB}
                onChange={(e) => {
                  setColorARGB(e.target.value);
                  const color = convertARGBToColor(e.target.value);
                  if (color) {
                    setColor(color);
                  }
                }}
                style={{ width: "100px" }}
              />
            </p>
            <p>
              #RGBA:{" "}
              <input
                type="text"
                value={colorRGBA}
                onChange={(e) => {
                  setColorRGBA(e.target.value);
                  const color = convertRGBAToColor(e.target.value);
                  if (color) {
                    setColor(color);
                  }
                }}
                style={{ width: "100px" }}
              />
            </p>
          </div>
          <div className="col col--3">
            <div>
              Int value:{" "}
              <input
                type="text"
                value={colorInt}
                onChange={(e) => {
                  const val = e.target.value;
                  setColorInt(val);
                  const color = convertIntToColor(parseInt(val));
                  if (color) {
                    setColor(color);
                  }
                }}
              />
            </div>
            <div>
              (used in{" "}
              <Link to="/docs/NOS files/NSgtdData/monster_dat#setting">
                monsters.dat
              </Link>
              )
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
