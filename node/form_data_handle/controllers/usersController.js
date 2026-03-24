const usersStorage = require("../storages/usersStorage");
const { body, query, validationResult, matchedData } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";
const emailErr = "must be email format";
const ageErr = "must be between 18-120";
const bioErr = "200 characters is max!";
const searchTextErr = "must be less than 100 characters.";
const pageErr = "must be a positive integer.";
const usersPerPage = 10;

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
  body("email").trim(),
];

const validateSearch = [
  query("name")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 100 })
    .withMessage(`Name ${searchTextErr}`)
    .customSanitizer((value) => value.replace(/[<>]/g, "")),
  query("email")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 100 })
    .withMessage(`Email ${searchTextErr}`)
    .customSanitizer((value) => value.replace(/[<>]/g, "")),
  query("page")
    .optional({ values: "falsy" })
    .toInt()
    .isInt({ min: 1 })
    .withMessage(`Page ${pageErr}`),
];

exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create User",
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, age, bio } = matchedData(req);
    usersStorage.addUser({ firstName, lastName, email, age, bio });
    res.redirect("/");
  },
];

exports.usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, age, bio } = matchedData(req);
    usersStorage.updateUser(req.params.id, {
      firstName,
      lastName,
      email,
      age,
      bio,
    });
    res.redirect("/");
  },
];

exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};

exports.usersSearchGet = [
  validateSearch,
  (req, res) => {
    try {
      const errors = validationResult(req);
      const { name = "", email = "", page = 1 } = matchedData(req, {
        locations: ["query"],
        includeOptionals: true,
      });
      const searchCriteria = {
        name,
        email,
      };
      const hasSearchCriteria = Boolean(searchCriteria.name || searchCriteria.email);
      const allUsers = usersStorage.getUsers();
      const filteredUsers = hasSearchCriteria
        ? allUsers.filter((user) => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            const userEmail = String(user.email || "").toLowerCase();
            const nameMatches = searchCriteria.name
              ? fullName.includes(searchCriteria.name.toLowerCase())
              : true;
            const emailMatches = searchCriteria.email
              ? userEmail.includes(searchCriteria.email.toLowerCase())
              : true;
            return nameMatches && emailMatches;
          })
        : [];

      const totalResults = filteredUsers.length;
      const totalPages = totalResults > 0 ? Math.ceil(totalResults / usersPerPage) : 0;
      const currentPage = totalPages > 0 ? Math.min(page, totalPages) : 1;
      const startIndex = (currentPage - 1) * usersPerPage;
      const users = filteredUsers.slice(startIndex, startIndex + usersPerPage);

      if (!errors.isEmpty()) {
        return res.status(400).render("search", {
          title: "Search users",
          errors: errors.array(),
          searchCriteria,
          hasSearchCriteria,
          totalResults: 0,
          users: [],
          currentPage: 1,
          totalPages: 0,
        });
      }

      res.render("search", {
        title: "Search users",
        searchCriteria,
        hasSearchCriteria,
        totalResults,
        users,
        currentPage,
        totalPages,
      });
    } catch (error) {
      res.status(500).render("search", {
        title: "Search users",
        errors: [{ msg: "Unexpected error while searching users." }],
        searchCriteria: { name: "", email: "" },
        hasSearchCriteria: false,
        totalResults: 0,
        users: [],
        currentPage: 1,
        totalPages: 0,
      });
    }
  },
];
