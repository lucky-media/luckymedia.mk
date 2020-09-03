<div id="services" style="scroll-margin-top: 7rem;" class="container mt-32">
    <div class="row">
        <div class="lg:col-2">
            <x-heading-sm color="black" title="What we do"></x-heading-sm>
        </div>
    </div>
    <div class="row mt-20 mb-40">
        @foreach($page->homepage->cards as $card)
            <div class="md:col-6 lg:col-4 mb-8">
                <x-card :icon="$card->icon" :title="$card->title" :desc="$card->desc"></x-card>
            </div>
        @endforeach
    </div>
</div>
