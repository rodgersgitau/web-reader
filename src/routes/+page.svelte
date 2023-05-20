<script lang="ts">
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<main class="container flex flex-col gap-8 p-8 mx-auto md:px-0">
	<h1 class="text-2xl">Web Reader ( CBS | CBR | EPUB )</h1>
	<section class="h-56 grid grid-cols-[.5fr_,1fr] gap-8">
		<div class="w-full p-8 border border-current rounded-md">
			<form method="POST" action="?/uploadFile">
				<div class="flex flex-col gap-8">
					<input
						name="fileUpload"
						id="fileUpload"
						type="file"
						class="w-full"
						value={form?.book ?? ''}
					/>
					<button class="px-4 py-3 text-current bg-black/90" type="submit">Add Book</button>
				</div>
			</form>
		</div>
		<div class="flex flex-col w-full gap-2 divide-y divide-current">
			{#each data.books as book}
				<div class="flex items-center gap-4 py-2">
					<span>{book.title}</span>
					<form method="POST" action="?/renameFile">
						<input type="hidden" name="id" value={book.id} />
						<button class="text-sm px-2.5 py-2 text-pink-700" type="submit">Edit</button>
					</form>
				</div>
			{/each}
		</div>
	</section>
</main>

<style lang="postcss">
	:global(html) {
		height: 100%;
		color: theme(colors.gray.100);
		background-color: theme(colors.gray.800);
	}
</style>
