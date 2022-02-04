<template>
    <div class="info-page">
        <h1 class="info-page-title">{{ $t("info.title") }}</h1>

        <div class="info-cards-container">
            <div class="info-card">
                <h2 class="info-card-title">{{ $t("info.card1.title") }}</h2>
                <p class="info-card-p">
                    {{ $t("info.card1.text") }}
                </p>
            </div>
            <div class="info-card">
                <h2 class="info-card-title">{{ $t("info.card2.title") }}</h2>
                <p class="info-card-p">
                    {{ $t("info.card2.text") }}
                </p>
            </div>
        </div>
        <div class="info-cards-container">
           <div class="info-card">
                <h2 class="info-card-title">{{ $t("info.card3.title") }}</h2>
                <p class="info-card-p">
                    {{ $t("info.card3.text") }}
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
    padding: 0.8rem;
}

.info-card-title {
    color: var(--text-primary);
}

.info-card-p {
    color: var(--text-secondary);
}

@media (max-width: 1000px) {

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