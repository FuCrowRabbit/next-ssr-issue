FROM node:18
RUN npm install -g express
ENV NODE_PATH=/usr/local/lib/node_modules
WORKDIR /app
EXPOSE 3001
ENTRYPOINT ["node"]
CMD ["server.js"]