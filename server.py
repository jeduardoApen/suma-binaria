import webbrowser
from http.server import SimpleHTTPRequestHandler, HTTPServer
import threading

def run_server(port=8000):
    server_address = ('localhost', port)
    handler = SimpleHTTPRequestHandler
    httpd = HTTPServer(server_address, handler)
    print(f"Servidor ejecutándose en http://localhost:{port}")
    
    # Abre el navegador automáticamente
    threading.Timer(1, lambda: webbrowser.open(f"http://localhost:{port}")).start()
    
    httpd.serve_forever()

if __name__ == "__main__":
    run_server(8000)