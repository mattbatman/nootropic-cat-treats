import { atom } from 'nanostores';
import { $history } from './history';

const $quotee = atom<string>('');

function updateQuotee({ newQuotee, id }: { newQuotee: string; id: number }) {
  const currentQuotee = $quotee.get();

  if (currentQuotee !== newQuotee) {
    $quotee.set(newQuotee);
    //    $history.set([id]);
  }
}

export { $quotee, updateQuotee };
