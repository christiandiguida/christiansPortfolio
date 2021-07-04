let nums = [2, 1, 3, 4, 5, 6];

const person = {
  firstName: "Christian",
  lastName: "Di Guida",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullname());
    }, 3000);
  },
};
