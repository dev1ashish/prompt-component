# openplayground

An LLM playground you can run on your laptop.

https://user-images.githubusercontent.com/111631/227399583-39b23f48-9823-4571-a906-985dbe282b20.mp4

#### Features

- Use any model from [OpenAI](https://openai.com), [Anthropic](https://anthropic.com), [Cohere](https://cohere.com), [Forefront](https://forefront.ai), [HuggingFace](https://huggingface.co), [Aleph Alpha](https://aleph-alpha.com), [Replicate](https://replicate.com), [Banana](https://banana.dev) and [llama.cpp](https://github.com/ggerganov/llama.cpp).
- Full playground UI, including history, parameter tuning, keyboard shortcuts, and logprops.
- Compare models side-by-side with the same prompt, individually tune model parameters, and retry with different parameters.
- Automatically detects local models in your HuggingFace cache, and lets you install new ones.
- Works OK on your phone.
- Probably won't kill everyone.

## Try on nat.dev

Try the hosted version: [nat.dev](https://nat.dev).

## How to install and run

```sh
pip install openplayground
openplayground run
```

Alternatively, run it as a docker container:
```sh
docker run --name openplayground -p 5432:5432 -d --volume openplayground:/web/config natorg/openplayground
```

This runs a Flask process, so you can add the typical flags such as setting a different port `openplayground run -p 1235` and others.

## How to run for development

```sh
git clone https://github.com/nat/openplayground
cd app && npm install && npx parcel watch src/index.html --no-cache
cd server && pip3 install -r requirements.txt && cd .. && python3 -m server.app
```

