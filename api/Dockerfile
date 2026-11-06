# syntax=docker/dockerfile:1
FROM maven:3.9.8-eclipse-temurin-21 AS build

WORKDIR /build

COPY pom.xml .
COPY .mvn .mvn
COPY mvnw mvnw
COPY mvnw.cmd mvnw.cmd

RUN --mount=type=cache,target=/root/.m2 \
    ./mvnw dependency:resolve

COPY src src

RUN --mount=type=cache,target=/root/.m2 \
    ./mvnw clean package -DskipTests && \
    mv target/api-0.0.1-SNAPSHOT.jar target/app.jar

FROM eclipse-temurin:21-jre-jammy

ARG UID=10001

RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    appuser

WORKDIR /app

COPY --from=build --chown=appuser:appuser /build/target/app.jar .

USER appuser

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
