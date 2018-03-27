FROM node
ENV PORT=8080
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE $PORT 
CMD ["npm", "start"]
