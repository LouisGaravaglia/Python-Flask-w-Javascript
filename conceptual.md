### Conceptual Exercise

Answer the following questions below:

**What is RESTful routing?** 

A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL.

**What is a resource?**

 A resource is an object with a type, associated data, relationships to other resources, and a set of methods that operate on it. It is similar to an object instance in an object-oriented programming language, with the important difference that only a few standard methods are defined for the resource (corresponding to the standard HTTP GET, POST, PUT and DELETE methods), while an object instance typically has many methods.

**When building a JSON API why do you not include routes to render a form that when submitted creates a new user?**

There is no reason to use render or redirect because building a JSON API passes the information from the route to a JSON dictionary in postgrSQL via POST.


**What does idempotent mean? Which HTTP verbs are idempotent?**

Idempotent means that the result is the same no matter how many times it is requested. However, the data requested CAN be changed. GET, PUT/PATCH, and DELETE are idempotent because the state of the server will always be the same after the HTTP verb occurs.

**What is the difference between PUT and PATCH?**

PUT udpates the entire post, essentially replacing it with all new content. While PATCH only updates a certain aspect of the post.

**What is one way encryption?**

One way encryption is a way of hasing a value which will return a encrypted value. Each time you hash that value will end up with the same encrypted value. But there is no way to use that encrypted value to then retreive the original value.

**What is the purpose of a `salt` when hashing a password?**

A salt helps to add additional content to encryption so that someone can't build a databse with key:value pairs of plain-text passwords and their encryptions, because now there will be a constantly chaning salt added to that encryption which will be impossible to account for since it's constantly changing when being requested.

**What is the purpose of the Bcrypt module?**

Bcrypt is a way to cryptographically hash a password. It is intentionally designed to be slow so that it makes it tougher to hack. 

**What is the difference between authorization and authentication?**

Authentication is the process of verification that an individual, entity or website is who it claims to be. One use of this is to use User.authenticate to see if a user is stored in session. Authorization is checking to see if something (ie a user) has "powers" or access to certain features.
