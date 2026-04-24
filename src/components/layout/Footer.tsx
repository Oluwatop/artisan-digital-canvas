export default function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              D
            </div>
            <span className="font-bold tracking-tighter">DESIGNER.PRO</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Designer Pro Portfolio. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}