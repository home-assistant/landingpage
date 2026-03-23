FROM golang:1.24-alpine3.22 AS builder

WORKDIR /usr/src/landingpage
ARG TARGETARCH

COPY . .

# Build
RUN \
    if [ -z "${TARGETARCH}" ]; then \
        echo "TARGETARCH is not set, please use Docker BuildKit for the build." && exit 1; \
    fi \
    && case "${TARGETARCH}" in \
        amd64|arm64) ;; \
        *) echo "Unsupported TARGETARCH: ${TARGETARCH}" && exit 1 ;; \
    esac \
    && CGO_ENABLED=0 GOARCH=${TARGETARCH} go build -ldflags="-s -w"


FROM scratch

WORKDIR /
COPY --from=builder /usr/src/landingpage/landingpage /usr/bin/landingpage
COPY rootfs /

ENTRYPOINT ["/usr/bin/landingpage"]

LABEL \
    io.hass.type="landingpage"
