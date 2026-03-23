ARG BUILD_FROM

FROM golang:1.24-alpine3.22 AS builder

WORKDIR /usr/src/landingpage
ARG BUILD_ARCH

COPY . .

# Build
RUN \
        if [ "${BUILD_ARCH}" = "aarch64" ]; then \
            CGO_ENABLED=0 GOARCH=arm64 go build -ldflags="-s -w"; \
        elif [ "${BUILD_ARCH}" = "amd64" ]; then \
            CGO_ENABLED=0 GOARCH=amd64 go build -ldflags="-s -w"; \
        else \
            exit 1; \
        fi


FROM ${BUILD_FROM}

WORKDIR /
COPY --from=builder /usr/src/landingpage/landingpage /usr/bin/landingpage
COPY rootfs /

ENTRYPOINT ["/usr/bin/landingpage"]
