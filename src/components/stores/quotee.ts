import { atom } from 'nanostores';

const $quotee = atom<string | null>(null);

function updateQuotee(newQuotee: string) {
  const currentQuotee = $quotee.get();

  if (currentQuotee !== newQuotee) {
    $quotee.set(newQuotee);
  }
}

export { $quotee, updateQuotee };
