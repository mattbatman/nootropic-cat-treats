let rec randomNoRepeat = (max, hist) => {
  let r = Random.int(max);
  let histList = Array.to_list(hist);
  if (List.exists(p => p === r, histList)) {
    randomNoRepeat(max, hist);
  } else {
    r;
  };
};
