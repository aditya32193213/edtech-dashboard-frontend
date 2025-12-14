// const USERS_KEY = "users";
// const CURRENT_USER_KEY = "currentUser";

// /* -------- Helpers -------- */
// const getUsers = () => {
//   return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
// };

// const saveUsers = (users) => {
//   localStorage.setItem(USERS_KEY, JSON.stringify(users));
// };

// /* -------- Signup -------- */
// export const signupUser = (name, email, password) => {
//   const users = getUsers();

//   const userExists = users.find((u) => u.email === email);
//   if (userExists) {
//     throw new Error("User already exists");
//   }

//   const newUser = { name, email, password };
//   users.push(newUser);
//   saveUsers(users);

//   const { password: _, ...safeUser } = newUser;
//   localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
// };

// export const loginUser = (email, password) => {
//   const users = getUsers();

//   const user = users.find(
//     (u) => u.email === email && u.password === password
//   );

//   if (!user) {
//     throw new Error("Invalid email or password");
//   }

//   const { password: _, ...safeUser } = user;
//   localStorage.setItem("currentUser", JSON.stringify(safeUser));

//   /* ---------- MIGRATION (RUN ONCE, THEN CLEAN) ---------- */
//   const legacyKey = "enrolledCourses";
//   const userEnrollKey = `enrolledCourses_${email}`;

//   const alreadyMigrated = localStorage.getItem(userEnrollKey);

//   if (!alreadyMigrated) {
//     const legacyEnrollments =
//       JSON.parse(localStorage.getItem(legacyKey)) || [];

//     localStorage.setItem(
//       userEnrollKey,
//       JSON.stringify(legacyEnrollments)
//     );

//     // 🔥 VERY IMPORTANT: destroy legacy data
//     localStorage.removeItem(legacyKey);
//   }
// };




// /* -------- Logout (✅ IMPROVED) -------- */
// export const logoutUser = () => {
//   const currentUser = JSON.parse(
//     localStorage.getItem(CURRENT_USER_KEY)
//   );

//   if (currentUser?.email) {
//     // Clear only this user's progress
//     localStorage.removeItem(`courseProgress_${currentUser.email}`);
//     localStorage.removeItem(`enrolledCourses_${currentUser.email}`);
//   }

//   localStorage.removeItem(CURRENT_USER_KEY);
// };

// /* -------- Auth Checks -------- */
// export const getUser = () => {
//   return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
// };

// export const isAuthenticated = () => {
//   return !!getUser();
// };

// /* -------- Profile Update -------- */
// export const updateProfile = (updatedData) => {
//   const users = getUsers();
//   const currentUser = getUser();

//   if (!currentUser) return;

//   const updatedUsers = users.map((u) =>
//     u.email === currentUser.email ? { ...u, ...updatedData } : u
//   );

//   saveUsers(updatedUsers);

//   const updatedUser = { ...currentUser, ...updatedData };
//   localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));
// };









const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

/* -------- Helpers -------- */
const getUsers = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

/* -------- Signup -------- */
export const signupUser = (name, email, password) => {
  const users = getUsers();

  if (users.find((u) => u.email === email)) {
    throw new Error("User already exists");
  }

  const newUser = { name, email, password };
  users.push(newUser);
  saveUsers(users);

  const { password: _, ...safeUser } = newUser;
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
};

/* -------- Login -------- */
export const loginUser = (email, password) => {
  const users = getUsers();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const { password: _, ...safeUser } = user;
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
};

/* -------- Logout -------- */
export const logoutUser = () => {
  const user = getUser();

  if (user?.email) {
    localStorage.removeItem(`courseProgress_${user.email}`);
  }

  localStorage.removeItem(CURRENT_USER_KEY);
};

/* -------- Auth Checks -------- */
export const getUser = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
};

export const isAuthenticated = () => {
  return !!getUser();
};

/* -------- Profile Update -------- */
export const updateProfile = (updatedData) => {
  const users = getUsers();
  const currentUser = getUser();

  if (!currentUser) return;

  const updatedUsers = users.map((u) =>
    u.email === currentUser.email ? { ...u, ...updatedData } : u
  );

  saveUsers(updatedUsers);
  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify({ ...currentUser, ...updatedData })
  );
};
