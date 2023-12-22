import { atom } from 'nanostores';
import { includes } from 'ramda';

const $history = atom<number[]>([]);

function addHistory(index: number) {
  const allHistory = $history.get();

  if (!includes(index, allHistory)) {
    $history.set([...allHistory, index]);
  }
}

export { $history, addHistory };
