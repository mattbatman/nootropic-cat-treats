import { persistentAtom } from '@nanostores/persistent';
import { $history } from './history';

const QUOTEE_IN_LOCAL_STORAGE = 'quotee';

const $quotee = persistentAtom<string>(
  QUOTEE_IN_LOCAL_STORAGE,
  '', // initial value
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);

function updateQuotee({ newQuotee, id }: { newQuotee: string; id: number }) {
  const currentQuotee = $quotee.get();

  if (currentQuotee !== newQuotee) {
    $quotee.set(newQuotee);
    $history.set([id]);
  }
}

export { $quotee, updateQuotee };
