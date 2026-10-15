export const allCategoryes = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
        next: { revalidate: 60 }
    })
    return response.json()

}

