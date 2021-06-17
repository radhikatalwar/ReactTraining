const validate = (values) => {
  const errors = {};
  console.log("In validate");

  if (!values.Name) {
    errors.Name = "Name is required";
    console.log("In validating name");
  } else if (values.Name.length > 15) {
    errors.Name = "Name must be at most 15 characters long";
  }

  if (!values.Age) {
    errors.Age = "Age is required";
  } else if (isNaN(values.Age)) {
    errors.Age = "Age should be a number";
  }

  if (!values.Address) {
    errors.Address = "The Address is required";
  }

  if (!values.PhoneNo) {
    errors.PhoneNo = "A PhoneNo is required";
  } else if (isNaN(values.PhoneNo)) {
    errors.PhoneNo = "Please Enter Valid Phone no.";
  } else if (values.PhoneNo.length > 10) {
    errors.PhoneNo = "PhoneNo must be og 10 digits";
  }
  return errors;
};

export default validate;


    // const findUser = newData.find((ele) => ele.ID === oldUser.ID);
    // console.log(findUser);
    // var otherUser = newData.filter((ele) => ele.ID !== oldUser.ID);
    // console.log(otherUser);
    // setNewData(otherUser);