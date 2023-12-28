import { atom } from 'nanostores';
import { $history } from './history';

const $quotee = atom<string | null>(null);

function updateQuotee({
  newQuotee,
  id
}: {
  newQuotee: string | null;
  id: number;
}) {
  const currentQuotee = $quotee.get();

  if (currentQuotee !== newQuotee) {
    $quotee.set(newQuotee);
    $history.set([id]);
  }
}

export { $quotee, updateQuotee };
