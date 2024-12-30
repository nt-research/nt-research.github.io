import { RgbaColor } from "react-colorful";

export function colorToRGBA(color: RgbaColor) {
  const hex =
    (color.r | (1 << 8)).toString(16).slice(1) +
    (color.g | (1 << 8)).toString(16).slice(1) +
    (color.b | (1 << 8)).toString(16).slice(1);

  // multiply before convert to HEX
  const alpha = ((color.a * 255) | (1 << 8)).toString(16).slice(1);
  return "#" + hex + alpha;
}

export function convertRGBAToColor(hex: string): RgbaColor | undefined {
  const match = hex.match(
    /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
  );
  if (!match) {
    return undefined;
  }

  return {
    r: parseInt(match[1], 16),
    g: parseInt(match[2], 16),
    b: parseInt(match[3], 16),
    a: parseInt(match[4], 16) / 255,
  };
}

export function colorToARGB(color: RgbaColor) {
  const hex =
    (color.r | (1 << 8)).toString(16).slice(1) +
    (color.g | (1 << 8)).toString(16).slice(1) +
    (color.b | (1 << 8)).toString(16).slice(1);

  // multiply before convert to HEX
  const alpha = ((color.a * 255) | (1 << 8)).toString(16).slice(1);
  return "#" + alpha + hex;
}

export function convertARGBToColor(hex: string): RgbaColor | undefined {
  const match = hex.match(
    /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
  );
  if (!match) {
    return undefined;
  }

  return {
    a: parseInt(match[1], 16) / 255,
    r: parseInt(match[2], 16),
    g: parseInt(match[3], 16),
    b: parseInt(match[4], 16),
  };
}

function hexToInt(hex: string) {
  if (hex.length % 2 != 0) {
    hex = "0" + hex;
  }
  var num = parseInt(hex, 16);
  var maxVal = Math.pow(2, (hex.length / 2) * 8);
  if (num > maxVal / 2 - 1) {
    num = num - maxVal;
  }
  return num;
}

export function colorToInt(color: RgbaColor) {
  const hex = colorToRGBA(color);
  const withoutHash = hex.slice(1);
  return hexToInt(withoutHash);
}

export function convertIntToColor(int: number): RgbaColor | undefined {
  const hex = intToHex(int, 4); // 4 bytes
  return convertRGBAToColor("#" + hex);
}

function intToHex(num: number, byteSize: number = 4): string {
  var maxVal = Math.pow(2, byteSize * 8);
  if (num < 0) {
    num = maxVal + num;
  }

  var hex = num.toString(16);

  if (hex.length % 2 != 0) {
    hex = "0" + hex;
  }

  while (hex.length < byteSize * 2) {
    hex = "0" + hex;
  }

  return hex;
}
