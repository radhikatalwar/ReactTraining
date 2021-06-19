const validate = (inputs) => {
  const errors = {};
  var letters = /^[A-Za-z]+$/;

  if (!inputs.Name) {
    errors.Name = "Please Enter Your Name";
  } else if (!inputs.Name.match(letters)) {
    errors.Name = "Please Enter Only Letters";
  }

  if (!inputs.Age) {
    errors.Age = "Please Enter Your Age";
  } else if (isNaN(inputs.Age)) {
    errors.Age = "Please Enter Only Numbers";
  }

  if (!inputs.PhoneNo) {
    errors.PhoneNo = "Please Enter Your PhoneNo";
  } else if (isNaN(inputs.PhoneNo)) {
    errors.PhoneNo = "Please Enter Only Numbers";
  } else if (inputs.PhoneNo.length !==10) {
    errors.PhoneNo = "Please Enter Valid Phone no";
  }

  if (!inputs.Address) {
    errors.Address = "Please Enter Your Address";
  }

  return errors;
};

export default validate;
