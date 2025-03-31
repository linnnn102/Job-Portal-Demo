/**
 * @swagger
 * /user/create:
 *     post:
 *       summary: Creates a new user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fullName:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *       responses:
 *         '201':
 *           description: User created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: User created successfully.
 *         '400':
 *           description: Validation failed
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: Validation failed.
 * /user/edit:
 *     put:
 *       summary: Updates user details
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fullName:
 *                   type: string
 *                 password:
 *                   type: string
 *       responses:
 *         '200':
 *           description: User updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: User updated successfully.
 *         '400':
 *           description: Validation failed
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: Validation failed.
 *         '404':
 *           description: User not found
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: User not found.
 *
 * /user/delete:
 *   DELETE:
 *     summary: Deletes a user
 *     parameters:
 *         - name: email
 *           in: query
 *           required: true
 *           schema:
 *             type: string
 *     responses:
 *         200:
 *           description: User deleted successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: User deleted successfully.
 *         404:
 *           description: User not found
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: User not found.
 *
 * /user/getAll:
 *     get:
 *       summary: Retrieves all users
 *       responses:
 *         '200':
 *           description: List of users
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   users:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         fullName:
 *                           type: string
 *                         email:
 *                           type: string
 *
 * /user/uploadImage:
 *     post:
 *       summary: Uploads an image for a user
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 image:
 *                   type: string
 *                   format: binary
 *       responses:
 *         '201':
 *           description: Image uploaded successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Image uploaded successfully.
 *                   filePath:
 *                     type: string
 *                     example: /images/filename.extension
 *         '400':
 *           description: Invalid file format
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *         '404':
 *           description: User not found
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: User not found.
 */