FROM node:latest as builder

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@8.1.3

COPY . ./

RUN npm run build --prod

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/booking-flight /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



