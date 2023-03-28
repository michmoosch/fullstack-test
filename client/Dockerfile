FROM node:18.15-buster
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
ENV VITE_TEST=testPassed
ENV VITE_OPENAI_API=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
ENV VITE_OPENAI_ORG=org-HRpFLdGsffkFpjAoVoPmwGIT
ENV VITE_PINECONE_API=670a8913-faf8-43bb-83d6-da138e82dc3d
ENV VITE_PINECONE_URL=https://upload-me-d8504c4.svc.us-west4-gcp.pinecone.io
ENV CLIENT_ENV=production
RUN npm i
CMD ["npm", "run", "dev"]