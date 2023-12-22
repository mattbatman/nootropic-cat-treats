import { atom } from 'nanostores';

const $history = atom<number[]>([]);

function addHistory(item: number) {
  $history.set([...$history.get(), item]);
}

export { $history, addHistory };
