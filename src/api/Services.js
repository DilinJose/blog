import { instance } from "./JsonPlaceholder";

export const getData = (url) => instance.get(url);
