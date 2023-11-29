sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
  ], function (Controller, MessageBox) {
    "use strict";
  
    // Local storage for user data
    var users = [
      { username: "user1", password: "pass1" },
      { username: "user2", password: "pass2" }
    ];
  
    return Controller.extend("login.controller.Login", {
      onInit: function () {
        // Initialization logic here
      },
  
      onLoginPress: function () {
        var username = this.getView().byId("usernameInput").getValue();
        var password = this.getView().byId("passwordInput").getValue();
  
        var isUserValid = this.validateUser(username, password);
  
        if (isUserValid) {
          MessageBox.success("Login Successful", {
            onClose: function () {
              // Navigate to the next page or perform other actions
            }
          });
        } else {
          MessageBox.error("Login Failed", {
            title: "Error"
          });
        }
      },
  
      onRegisterPress: function () {
        var dialog = this.getView().byId("registrationDialog");
        dialog.open();
      },
  
      onRegisterSubmit: function () {
        var registerUsername = this.getView().byId("registerUsernameInput").getValue();
        var registerPassword = this.getView().byId("registerPasswordInput").getValue();
  
        // Simulate user registration
        users.push({ username: registerUsername, password: registerPassword });
  
        MessageBox.success("Registration and Login Successful", {
          onClose: function () {
            var dialog = this.getView().byId("registrationDialog");
            dialog.close();
            // Automatically log in the user after successful registration
            this.getView().byId("usernameInput").setValue(registerUsername);
            this.getView().byId("passwordInput").setValue(registerPassword);
            this.onLoginPress();
          }
        });
      },
  
      onRegisterCancel: function () {
        var dialog = this.getView().byId("registrationDialog");
        dialog.close();
      },
  
      validateUser: function (username, password) {
        // Simulate user validation by checking against local data
        var user = users.find(function (u) {
          return u.username === username && u.password === password;
        });
  
        return user !== undefined;
      }
    });
  });
  