module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
      "browser": true
    },
    "plugins": ["react"],
    "extends": "airbnb",
    "rules": {
      "comma-dangle": ["error", "never"]
    }
};
