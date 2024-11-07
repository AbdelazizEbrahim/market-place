# Step 1: Use Node.js image as the base image
FROM node:18-alpine AS base

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy only package.json and package-lock.json first to cache dependencies
COPY package.json package-lock.json* yarn.lock* ./ 

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Expose the port on which the app will run
EXPOSE 3000

# Step 8: Start the Next.js app
CMD ["npm", "start"]
