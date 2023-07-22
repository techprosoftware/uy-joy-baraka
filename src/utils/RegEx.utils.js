export const formatPhoneNumber = (phoneNumber) => {
  const cleanedNumber = phoneNumber.replace(/\D/g, "");
  let formattedNumber = cleanedNumber.slice(0, 22);

  if (formattedNumber.charAt(0) === "+") {
    formattedNumber = formattedNumber.slice(1);
  }

  if (formattedNumber.length > 3) {
    if (formattedNumber.length === 12) {
      formattedNumber = formattedNumber.replace(
        /^(\d{3})(\d{2})(\d{2})(\d{2})(\d{3})$/,
        "$1($2)$3$4$5"
      );
    } else if (formattedNumber.length <= 6) {
      formattedNumber = formattedNumber.replace(/^(\d{3})(\d{1,2})$/, "($1)$2");
    } else if (formattedNumber.length <= 8) {
      formattedNumber = formattedNumber.replace(
        /^(\d{3})(\d{2})(\d{1,2})$/,
        "($1)$2$3"
      );
    } else if (formattedNumber.length <= 10) {
      formattedNumber = formattedNumber.replace(
        /^(\d{3})(\d{2})(\d{2})(\d{1,2})$/,
        "($1)$2$3$4"
      );
    } else {
      formattedNumber = formattedNumber.replace(
        /^(\d{3})(\d{2})(\d{2})(\d{2})(\d{1,2})$/,
        "($1)$2$3$4$5"
      );
    }
  }

  return formattedNumber;
};
