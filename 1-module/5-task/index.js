function truncate(str, maxlength) {
  let max = maxlength - 1;
	if (str.length < max) {
		return str;
	}
	return str.substr(0, max) + "…";
}
