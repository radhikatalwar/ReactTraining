import { makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  heading: {
    color: "#333",
    fontSize: "24px",
  },
  link: {
    backgroundColor: "#eee",
    width: "fit-content",
    padding: "5px 15px",
    letterSpacing: "1px",
    margin: "20px 0 40px",
  },
  mainBarContainer: {
    padding: "100px 60px 50px",
    color: "#333",
  },
  image: {
    height: "200px",
    width: "31%",
    margin: "10px 0",
    borderRadius: "10px",
  },
  imgBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  about: {
    margin: "36px 0",
    letterSpacing: "2px",
    fontSize: "20px",
  },
  //   code: {
  //     backgroundColor: "#eee !important",
  //     color: "#333 !important",
  //   },
});

const imageURLs = [
  "https://images.dog.ceo/breeds/retriever-golden/n02099601_864.jpg",
  "https://images.dog.ceo/breeds/terrier-dandie/n02096437_2605.jpg",
  "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_5665.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_12945.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_5285.jpg",
  "https://images.dog.ceo/breeds/hound-basset/n02088238_11846.jpg",
];

export const About = () => {
  const classes = styles();

  return (
    <div className={classes.mainBarContainer}>
      <div>
        <Typography className={classes.heading}>{"ABOUT"}</Typography>
        <Typography className={classes.about}>
          {
            "Original dataset taken from the the Stanford Dogs Dataset. Logo thanks to NotKnifoon."
          }
        </Typography>
        <Typography className={classes.heading}>{"SUPPORT US!"}</Typography>
        <Typography className={classes.about}>
          {
            "Do you care about accessing free images of dogs on the internet? Do you want your dog pictures to be served at lightning fast speed with 99.999% uptime? Do you care about DaaS (Dogs as a Service)? Help us pay our hosting bills and ensure that Dog API stays free to access and use for everyone. We'll even gift you an executive business tie for your pet (or small child) to say thanks."
          }
        </Typography>
      </div>
      <div className={classes.imgBox}>
        <img className={classes.image} src={imageURLs[0]} alt="dog" />
        <img className={classes.image} src={imageURLs[1]} alt="dog" />
        <img className={classes.image} src={imageURLs[2]} alt="dog" />
        <img className={classes.image} src={imageURLs[3]} alt="dog" />
        <img className={classes.image} src={imageURLs[4]} alt="dog" />
        <img className={classes.image} src={imageURLs[5]} alt="dog" />
      </div>
    </div>
  );
};
