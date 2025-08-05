SRC_DIR=src
OUT_DIR=out

SOURCES := $(shell find $(SRC_DIR) -name '*.java')

all: build

build:
	mkdir -p $(OUT_DIR)
	javac -d $(OUT_DIR) $(SOURCES)

run: build
	java -cp $(OUT_DIR) Lox

clean:
	rm -rf $(OUT_DIR)
