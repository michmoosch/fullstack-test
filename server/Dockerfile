FROM node:18.15-buster
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
ENV OPENAI_API=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
ENV OPENAI_ORG=org-HRpFLdGsffkFpjAoVoPmwGIT
ENV PINECONE_API=670a8913-faf8-43bb-83d6-da138e82dc3d
ENV PINECONE_URL=https://upload-me-d8504c4.svc.us-west4-gcp.pinecone.io
CMD ["npm", "run", "start"]