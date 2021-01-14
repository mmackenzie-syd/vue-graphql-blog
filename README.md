# vue-graphql-blog

A Pinterest-inspired full-stack app with Vue (front end), GraphQL, Apollo 2, Vuex (state management).

This was taken from an online video course. The Vuetify used in the course was an old version. I have not bothered to correct the styling 
and it is off in places.

## Index:

### Section 1: Getting Started
#### 0 / 3|29min

1. Preview our Completed App
18min

2. Tools Used/Required
4min

3. Formatting Vue Templates (And More) with VS Code
6min

### Section 2: What is GraphQL / Apollo? (Optional)
#### 0 / 2|23min

4. What is GraphQL? Using the SWAPI GraphQL API
20min

5. What is Apollo?
3min

### Section 3: Intro to Apollo Server 2, Queries, Mutations and GraphQL Playground
#### 4 / 5|27min

6. Git Clone and Install Dependencies (Required)
2min

7. Initializing Apollo Server 2 (Optional)
7min

8. Adding Resolvers and Executing Queries in GraphQL Playground (Optional)
6min

9. Writing and Running First Mutation in GraphQL Playground (Optional)
8min

10. Exploring GraphQL Playground
4min
### Section 4: Connect to MLab Database, Create Mongoose Models and GraphQL TypeDefs
#### 6 / 6|50min

11. Create MongoDB Atlas Database, Connect to GraphQL Server
7min

12. Creating Mongoose Schemas
11min

13. Creating typeDefs for Project
8min

14. Write and Run signupUser Mutation
9min

15. Write and Run addPost Mutation
7min

16. Write and Run getPosts Query, Intro to populate
7min
### Section 5: Create Vue Frontend with Vue CLI 3
#### 8 / 8|57min

17. Create Vue Client with Vue CLI 3
8min

18. Adding Plugins with Vue GUI and Concurrently Dev Script
4min

19. Structuring our Vue App
4min

20. Installing Vuetify Plugin and Generating a Theme
10min

21. Coolors.co for Creating Great Color Schemes (Optional)
4min

22. Horizontal Navbar and Mobile First Design
12min

23. Add Side Navbar
7min

24. Add Routing and Page Transitions
9min
### Section 6: Using Vue Apollo
#### 4 / 4|24min

25. Setting up Apollo Client / Vue Apollo, Firing getPosts Query from Client
8min

26. Dive into Smart Queries in Vue Components
7min

27. Executing Queries with the ApolloQuery Component
6min

28. Add Carousel Component to Home Page
3min
### Section 7: Integrate Vuex with ApolloClient
#### 4 / 4|23min

29. Firing getPosts Action with Vuex
7min

30. Using Mutations and Getters
8min

31. Add Loading Property, Loading Spinner and mapGetters
6min

32. Create queries.js for Clientside Query / Mutation Definitions
3min
### Section 8: JWT Authentication for Signin / Signup
#### 8 / 12|1hr 27min

33. Create Gravatar Avatar and Hash User Passwords on Signup
7min

34. Write and Run signinUser Mutation
5min

35. Sign Token and Return it Upon Signin/Signup
8min

36. Using Variables in GraphQL, Signin / Signup Mutation Defs
6min

37. Add Signin Form, Write and Run signinUser Action, Return JWT
9min

38. Additional Config for ApolloClient, Send Token from LocalStorage
8min

39. Verify JWT Token in server.js, Pass Result to currentUser in Context
7min

40. Create getCurrentUser Query, Execute it from main.js
9min

41. Redirect Home upon Signin with Watcher
8min

42. Change Navbar for Signed-in User
9min

43. Create Signout Action
6min

44. Protected Routes and Clearing Malformed Tokens
5min
### Section 9: Error Handling and Form Validation
#### 0 / 6|43min

45. Adding Global Form Alert Component
9min

46. Add Loading Spinner to Signin Button
3min

47. Form Validation with Vuetify in Signin Component
7min

48. Show AuthSnackbar on Signin / Signup
5min

49. Handle Authentication Errors, Show Auth Error Snackbar
9min

50. Create Signup Form and Signup User Action
11min
### Section 10: Add Post / Infinite Scroll Components
#### 0 / 6|58min

51. Make Add Post Form
8min

52. Create and Execute addPost Action / Mutation
10min

53. Update and Optimistic Response for addPost Mutation
11min

54. Infinite Scroll on Posts Page; Add typeDef, Resolver, and Query
8min

55. Add Infinite Scroll Functionality on Client
10min

56. Add Grid Layout / Cards for Each Post in Posts Component
10min
### Section 11: Post Component
#### 0 / 7|44min

57. Create Post Component and Route
5min

58. Create and Execute getPost Query
7min

59. Build out Post Card in Post Component
8min

60. Add Messages Section to Post Component
6min

61. Create addPostMessage Mutation
6min

62. Perform addPostMessage in Post Component
8min

63. Add Validation for Message Input, Clear on Submit
5min
### Section 12: Like / Unlike Post
#### 0 / 4|27min

64. Create typeDefs / resolvers / queries for Like / Unlike
8min

65. Firing Like / Unlike Post Mutations from Client
9min

66. Add Logic for Toggling Like / Unlike Post
5min

67. Add Like Notification in Profile Tab
5min
### Section 13: Search Posts
#### 0 / 4|22min

68. Add typeDef / resolver / query for searchPosts
7min

69. Fire searchPosts Action, Log Search Results
4min

70. Add searchResults to State, Build Search Result Card
5min

71. Finishing Search Results, Making them Functional
6min
### Section 14: Profile Page, Update / Delete Posts
#### 0 / 7|53min

72. Add User Details Card / Favorites Cards
6min

73. Write getUserPosts Query
4min

74. Execute getUserPosts Query, Create and Populate User Cards
9min

75. Add Edit Post Dialog for Updating User Posts
6min

76. Create updateUserPost Mutation
8min

77. Executing updateUserPost Mutation with Vuex Action
13min

78. deleteUserRecipe Mutation - Backend Creation to Frontend Execution
7min
### Section 15: Preparing for Deployment
#### 0 / 3|17min

79. RefetchQueries for Fresh Data upon Executing Mutations
4min

80. Formatting Dates with moment
6min

81. Minor Improvements/Fixes
7min
### Section 16: Deployment with Heroku / Now v2
#### 0 / 1|13min

82. Deploying App with Heroku / Now v2
