export default {
  parseHeight(height) {
    const data = height.split("'");
    const feet = parseInt(data[0], 10);
    const inch = parseInt(data[1], 10);

    const heightInCm = Math.round((feet / 0.032808 + inch / 0.3937).toFixed(1));
    return heightInCm;
  },
};
