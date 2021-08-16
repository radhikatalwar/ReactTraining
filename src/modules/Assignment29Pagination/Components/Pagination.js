import { List, ListItem, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const styles = makeStyles({
  list: {
    display: "flex",
  },
  listItem: {
    padding: "20px 0 30px 16px",
  },
  link: {
    color: "teal",
    textDecoration: "none",
  },
  linkActive: {
    color: "#223c50",
  },
});

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const classes = styles();
  const pageNumbers = [];
  const [active, setActive] = useState(0);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <List className={classes.list}>
        {pageNumbers.map((number, index) => (
          <ListItem key={number} className={classes.listItem}>
            <a
              onClick={() => {
                paginate(number);
                setActive(index);
              }}
              href="#"
              className={index === active ? classes.linkActive : classes.link}
            >
              {number}
            </a>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Pagination;
