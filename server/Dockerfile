FROM node:18.15-buster
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
ENV TEST=testPassed
ENV OPENAI_API=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
ENV OPENAI_ORG=org-HRpFLdGsffkFpjAoVoPmwGIT
CMD ["npm", "run", "start"]