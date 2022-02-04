<template>
    <div class="info-page">
        <h1 class="info-page-title">Explanations</h1>

        <div class="info-cards-container">
            <div class="info-card">
                <h2 class="info-card-title">Card title</h2>
                <p class="info-card-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere soluta repellat? Eligendi molestias beatae facilis nam id! Voluptatibus maiores quas aut perspiciatis aperiam sapiente obcaecati, recusandae mollitia delectus non.
                </p>
            </div>
            <div class="info-card">
                <h2 class="info-card-title">Card title</h2>
                <p class="info-card-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere soluta repellat? Eligendi molestias beatae facilis nam id! Voluptatibus maiores quas aut perspiciatis aperiam sapiente obcaecati, recusandae mollitia delectus non.
                </p>
            </div>
        </div>
        <div class="info-cards-container">
            <div class="info-card">
                <h2 class="info-card-title">Card title</h2>
                <p class="info-card-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere soluta repellat? Eligendi molestias beatae facilis nam id! Voluptatibus maiores quas aut perspiciatis aperiam sapiente obcaecati, recusandae mollitia delectus non.
                </p>
            </div>
            <div class="info-card">
                <h2 class="info-card-title">Card title</h2>
                <p class="info-card-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere soluta repellat? Eligendi molestias beatae facilis nam id! Voluptatibus maiores quas aut perspiciatis aperiam sapiente obcaecati, recusandae mollitia delectus non.
                </p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "InfoPage",
    props: []
}
</script>


<style>

.info-page {
    margin-left: 5rem;
    padding: 1rem;
}

.info-page-title {
    color: var(--accent-color);
    text-align: center;
    font-size: 3rem;
    margin: 0;
    margin-top: 0.5rem;
}

.info-cards-container {
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-top: 4rem;
}

.info-card {
    background-color: var(--bg-accent);
    flex: 50%;
    margin: 0 2rem 0 2rem;
    border-radius: 0.8rem;
}

.info-card-title {
    color: var(--text-primary);
}

.info-card-p {
    color: var(--text-secondary);
}

@media (max-width: 950px) {

  .info-cards-container {
    flex-direction: column;
    gap: 2rem;
  }

}

@media only screen and (max-width: 600px) {

    .info-page {
        margin-bottom: 5rem;
        margin-left: 0;
    }

}

</style>