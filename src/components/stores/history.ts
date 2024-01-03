import { persistentAtom } from '@nanostores/persistent';
import { includes } from 'ramda';

const KEY_IN_LOCAL_STORAGE = 'history';

const $history = persistentAtom<number[]>(
  KEY_IN_LOCAL_STORAGE,
  [], // initial value
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);

function addHistory(index: number) {
  const allHistory = $history.get();

  if (!includes(index, allHistory)) {
    $history.set([...allHistory, index]);
  }
}

export { $history, addHistory };
