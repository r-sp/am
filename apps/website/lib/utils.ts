import { cities } from '../data/cities';
import { regencies } from '../data/regencies';
import { provinces } from '../data/provinces';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomISO(min: number): string | undefined {
  const provinceISO = provinces.map((reg) => reg.iso);
  const randomNumber = getRandomInt(min, provinceISO.length);
  return provinceISO[randomNumber];
}

const baseISO = getRandomISO(0);
const localCity = cities.filter((reg) => reg.iso === baseISO).map((reg) => 'Kota ' + reg.name);
const localRegency = regencies.filter((reg) => reg.iso === baseISO).map((reg) => 'Kab. ' + reg.name);
const localProvince = provinces.filter((reg) => reg.iso === baseISO).map((reg) => reg.name);
const localDistrict = localRegency.concat(localCity);

export const localArea = {
  district: localDistrict,
  province: localProvince,
};
